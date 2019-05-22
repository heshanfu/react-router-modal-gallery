import { useEffect, useContext } from "react";
import { ModalRouteContext } from "./ModalSwitch";
import propTypes from "prop-types";

function ModalRouteContent({ defaultParentPath, children, ...rest }) {
  const { previousParentLocation } = useContext(ModalRouteContext);

  const { location, history } = rest;

  const isModal = location.state && location.state.modal;
  const isInitialRender = previousParentLocation === location;

  // isModal: false => User opened a modal route directly (opened on a new tab etc.)
  // isInitialRender: true => User refreshed the page while on a modal route (pressed the F5 etc.)
  const reRenderRoute = !isModal || isInitialRender;

  useEffect(() => {
    function addStateToLocation() {
      history.replace({
        state: {
          ...location.state,
          defaultParentPath,
          modal: true
        }
      });
    }

    if (reRenderRoute) {
      addStateToLocation();
    }
  }, [location, defaultParentPath, reRenderRoute, history]);

  return !reRenderRoute
    ? children({
        ...rest
      })
    : null;
}

ModalRouteContent.propTypes = {
  defaultParentPath: propTypes.string.isRequired,
  children: propTypes.func.isRequired,
  match: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
  history: propTypes.object.isRequired
};

export default ModalRouteContent;

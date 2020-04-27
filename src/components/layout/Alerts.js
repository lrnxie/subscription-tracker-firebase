import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Alert } from "reactstrap";

const Alerts = () => {
  const { authAlert } = useContext(AuthContext);

  return authAlert ? (
    <div>
      <Alert color={authAlert.type} className="text-center">
        {authAlert.msg}
      </Alert>
    </div>
  ) : (
    <div></div>
  );
};

export default Alerts;

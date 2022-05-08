import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppointmentProvider from "./context/AppointmentProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppointmentProvider>
			<App />
		</AppointmentProvider>
	</React.StrictMode>
);

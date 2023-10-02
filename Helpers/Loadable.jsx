// Import the Suspense component from the 'react' library.
import { Suspense } from "react";

// Import the Loader component from the './Loader' file.
import Loader from "./Loader";

// Create a higher-order component (HOC) called 'Loadable' which takes a 'Component' as its parameter.
const Loadable = (Component) => (props) =>
  (
    // Wrap the provided 'Component' with the 'Suspense' component.
    // This allows us to handle asynchronous loading of components.
    <Suspense fallback={<Loader />}>
      {/* Render the 'Component' passed to 'Loadable' with any additional 'props'. */}
      <Component {...props} />
    </Suspense>
  );

// Export the 'Loadable' HOC so that it can be used elsewhere in the application.
export default Loadable;

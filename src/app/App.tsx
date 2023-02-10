import {Suspense} from "react";
import {classNames} from "shared/lib";
import {Navbar} from "widgets/Navbar";
import {routeConfig} from "./config/routeConfig";
import {useTheme} from "features/ThemeSwitcher";
import {AppRouter} from "shared/components/AppRouter";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />

            <div className="content-page">
              <Sidebar />
              <AppRouter config={routeConfig} />
            </div>

          </Suspense>
        </div>
  );
};

export default App;

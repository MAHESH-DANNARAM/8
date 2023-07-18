import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeDesktop from "./pages/HomeDesktop";
import HomeTablet from "./pages/HomeTablet";
import HomeMobileLandscape from "./pages/HomeMobileLandscape";
import HomeMobilePortrait from "./pages/HomeMobilePortrait";
import BlogTabletScrolling from "./pages/BlogTabletScrolling";
import BlogPostTemplateDesktop from "./pages/BlogPostTemplateDesktop";
import BlogPostTemplateMobilePort from "./pages/BlogPostTemplateMobilePort";
import BlogDesktopPage01 from "./pages/BlogDesktopPage01";
import BlogDesktopPage02 from "./pages/BlogDesktopPage02";
import BlogTabletPage01 from "./pages/BlogTabletPage01";
import BlogTabletPage02 from "./pages/BlogTabletPage02";
import BlogMobileLandscapePage01 from "./pages/BlogMobileLandscapePage01";
import BlogMobilePortraitPage01 from "./pages/BlogMobilePortraitPage01";
import BlogMobileLandscapePage021 from "./pages/BlogMobileLandscapePage021";
import BlogMobileLandscapePage02 from "./pages/BlogMobileLandscapePage02";
import BlogMobileLandscapeScrolli from "./pages/BlogMobileLandscapeScrolli";
import BlogMobilePortraitScrollin from "./pages/BlogMobilePortraitScrollin";
import BlogPostTemplateTablet from "./pages/BlogPostTemplateTablet";
import BlogPostTemplateMobileLand from "./pages/BlogPostTemplateMobileLand";
import LiveVersion from "./pages/LiveVersion";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hometablet":
        title = "";
        metaDescription = "";
        break;
      case "/homemobilelandscape":
        title = "";
        metaDescription = "";
        break;
      case "/homemobileportrait":
        title = "";
        metaDescription = "";
        break;
      case "/blogtablet-scrolling":
        title = "";
        metaDescription = "";
        break;
      case "/blogposttemplatedesktop":
        title = "";
        metaDescription = "";
        break;
      case "/blogposttemplatemobileportrait":
        title = "";
        metaDescription = "";
        break;
      case "/blogdesktoppage01":
        title = "";
        metaDescription = "";
        break;
      case "/blogdesktoppage02":
        title = "";
        metaDescription = "";
        break;
      case "/blogtabletpage01":
        title = "";
        metaDescription = "";
        break;
      case "/blogtabletpage02":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobilelandscapepage01":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobileportraitpage01":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobilelandscapepage02":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobilelandscapepage021":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobilelandscapescrolling":
        title = "";
        metaDescription = "";
        break;
      case "/blogmobileportrait-scrolling":
        title = "";
        metaDescription = "";
        break;
      case "/blogposttemplatetablet":
        title = "";
        metaDescription = "";
        break;
      case "/blogposttemplatemobilelandscape":
        title = "";
        metaDescription = "";
        break;
      case "/live-version":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeDesktop />} />
      <Route path="/hometablet" element={<HomeTablet />} />
      <Route path="/homemobilelandscape" element={<HomeMobileLandscape />} />
      <Route path="/homemobileportrait" element={<HomeMobilePortrait />} />
      <Route path="/blogtablet-scrolling" element={<BlogTabletScrolling />} />
      <Route
        path="/blogposttemplatedesktop"
        element={<BlogPostTemplateDesktop />}
      />
      <Route
        path="/blogposttemplatemobileportrait"
        element={<BlogPostTemplateMobilePort />}
      />
      <Route path="/blogdesktoppage01" element={<BlogDesktopPage01 />} />
      <Route path="/blogdesktoppage02" element={<BlogDesktopPage02 />} />
      <Route path="/blogtabletpage01" element={<BlogTabletPage01 />} />
      <Route path="/blogtabletpage02" element={<BlogTabletPage02 />} />
      <Route
        path="/blogmobilelandscapepage01"
        element={<BlogMobileLandscapePage01 />}
      />
      <Route
        path="/blogmobileportraitpage01"
        element={<BlogMobilePortraitPage01 />}
      />
      <Route
        path="/blogmobilelandscapepage02"
        element={<BlogMobileLandscapePage021 />}
      />
      <Route
        path="/blogmobilelandscapepage021"
        element={<BlogMobileLandscapePage02 />}
      />
      <Route
        path="/blogmobilelandscapescrolling"
        element={<BlogMobileLandscapeScrolli />}
      />
      <Route
        path="/blogmobileportrait-scrolling"
        element={<BlogMobilePortraitScrollin />}
      />
      <Route
        path="/blogposttemplatetablet"
        element={<BlogPostTemplateTablet />}
      />
      <Route
        path="/blogposttemplatemobilelandscape"
        element={<BlogPostTemplateMobileLand />}
      />
      <Route path="/live-version" element={<LiveVersion />} />
    </Routes>
  );
}
export default App;

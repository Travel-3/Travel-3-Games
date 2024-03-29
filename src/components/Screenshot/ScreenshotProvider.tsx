import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  // useEffect,
  // useEffect,
  // useLayoutEffect,
  useState,
} from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

export type ScreenshotContextState = {
  screenshot: string | null;
  take: () => void;
};

export const ScreenshotContext = createContext<ScreenshotContextState>({
  screenshot: null,
  // setScreenshot: () => {},
  take: () => {},
});

export type ScreenshotProviderProps = {
  isReady: boolean;
} & PropsWithChildren;

// const saveAs = (base64: string, filename: string) => {
//   // Create a link element
//   const link = document.createElement("a");
//   link.download = filename;
//   // link.target = "_blank";
//   link.href = base64;
//   // console.log(base64);
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   // // Append the link to the body, click it, and then remove it
//   // setTimeout(function () {
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);
//   // }, 100);
// };

export default function ScreenshotProvider({
  isReady = false,
  children,
}: ScreenshotProviderProps) {
  const [base64, setBase64] = useState<string | null>(null);

  const build = async () => {
    const node: HTMLElement = document.getElementById("canvas") as HTMLElement;

    const { width, height } = node.getBoundingClientRect();
    try {
      const canvas = await html2canvas(node, {
        scale: 3,
        // allowTaint: true,
        useCORS: true,
        allowTaint: true,
        x: 0,
        y: 0,
        width,
        height,
        imageTimeout: 0,
        ignoreElements: function (e: Element) {
          console.log(e.tagName, e.getAttribute("loading"));
          if (
            e.tagName === "SCRIPT" ||
            e.tagName === "A" ||
            e.getAttribute("loading") === "lazy"
          ) {
            return true;
          }
          return false;
          // console.log(e);
          // if (

          //   // @ts-ignore-next-line
          //   (e.tagName === "A" && e.host !== window.location.host) ||
          //   e.getAttribute("loading") === "lazy"
          // ) {
          //   return true;
          // } else {
          //   return false;
          // }
        },
      });
      setBase64(canvas.toDataURL());
      return canvas.toDataURL();
    } catch (error) {
      alert("請刷新頁面後再試一次！");
      return null;
    }
  };

  const take = useCallback(() => {
    (async () => {
      const _base64 = await build();
      if (_base64 === null) return alert("請刷新頁面後再試一次！");

      return saveAs(_base64, `「Travel3 X 粉啵啵送聖誕禮物」活動`);
    })();
  }, []);

  return (
    <ScreenshotContext.Provider value={{ screenshot: base64, take }}>
      {children}
    </ScreenshotContext.Provider>
  );
}

export const useScreenshot = () => {
  const { screenshot, take } = useContext(ScreenshotContext);
  return { screenshot, take };
};

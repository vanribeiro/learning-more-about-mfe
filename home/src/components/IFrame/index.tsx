import { useState } from "react";
import { createPortal } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const style = {
  border: 'none'
}

const IFrame = ({ children, ...props }: any) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement>();

  const cache = createCache({
    key: "css",
    container: contentRef?.contentWindow?.document?.head,
    prepend: true,
  });

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <CacheProvider value={cache}>
      <iframe {...props} ref={setContentRef} style={style}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </CacheProvider>
  );
};

export default IFrame;
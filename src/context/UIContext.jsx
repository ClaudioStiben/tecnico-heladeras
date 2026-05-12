import { createContext, useCallback, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const [reviewsVersion, setReviewsVersion] = useState(0);

  const closeAll = useCallback(() => {
    setLoginOpen(false);
    setRegisterOpen(false);
    setReviewOpen(false);
    setAllReviewsOpen(false);
  }, []);

  const openLogin = useCallback(() => {
    closeAll();
    setLoginOpen(true);
  }, [closeAll]);

  const openRegister = useCallback(() => {
    closeAll();
    setRegisterOpen(true);
  }, [closeAll]);

  const openReview = useCallback(() => {
    closeAll();
    setReviewOpen(true);
  }, [closeAll]);

  const openAllReviews = useCallback(() => {
    closeAll();
    setAllReviewsOpen(true);
  }, [closeAll]);

  const bumpReviews = useCallback(() => setReviewsVersion((v) => v + 1), []);

  return (
    <UIContext.Provider
      value={{
        loginOpen,
        registerOpen,
        reviewOpen,
        allReviewsOpen,
        reviewsVersion,
        openLogin,
        openRegister,
        openReview,
        openAllReviews,
        closeAll,
        bumpReviews,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

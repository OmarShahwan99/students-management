import React from "react";

type MODAL_VIEWS = "ADD_UPDATE_STUDENT" | "DELETE_CONFIRM" | "SIGN_OUT_CONFIRM";

type MODAL_WIDTHS = "xs" | "sm" | "md" | "lg" | "xl";

interface State {
  view?: MODAL_VIEWS;
  data?: any;
  isOpen: boolean;
  maxWidth?: MODAL_WIDTHS;
}
type Action =
  | {
      type: "open";
      view?: MODAL_VIEWS;
      payload?: any;
      maxWidth?: MODAL_WIDTHS;
    }
  | { type: "close" };

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
  maxWidth: "md",
};

function modalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "open":
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
        maxWidth: action.maxWidth,
      };
    case "close":
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false,
        maxWidth: "md",
      };
    default:
      throw new Error("Unknown Modal Action!");
  }
}

const ModalStateContext = React.createContext<State>(initialState);
ModalStateContext.displayName = "ModalStateContext";
const ModalActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
ModalActionContext.displayName = "ModalActionContext";

export const ModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>
        {children}
      </ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = React.useContext(ModalActionContext);
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal(view?: MODAL_VIEWS, payload?: unknown, maxWidth?: MODAL_WIDTHS) {
      dispatch({ type: "open", view, payload, maxWidth });
    },
    closeModal() {
      dispatch({ type: "close" });
    },
  };
}

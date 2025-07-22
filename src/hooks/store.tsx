import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { rootState, dispatch } from "../store";

export const useAppDispatch: () => dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

import { PayloadAction } from "@reduxjs/toolkit"
import { IStore } from "../../redusers/main/types"

export type MainActions = {
    setUsers: (state: IStore, payload: PayloadAction<any[]>) => void
}
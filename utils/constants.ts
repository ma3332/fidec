// export enum ETrangThai {
//   OK = "Duyệt",
// }

export const TEST =  {
  HANDLE_FETCH_DATA: 'handle-fetch-data',
  FETCH_DATA_FROM_STORAGE: 'fetch-data-from-storage',
  HANDLE_SAVE_DATA: 'handle-save-data',
  SAVE_DATA_IN_STORAGE: 'save-data-in-storage',
  REMOVE_DATAPOINT_FROM_STORAGE: 'remove-datapoint-from-storage',
  EDIT_DATAPOINT_IN_STORAGE: 'edit-datapoint-in-storage', 
}

export const getRecipientsAddress = async ()=>{
  const res = await window.Main.handleGetSaveReceive();
  return res;
}


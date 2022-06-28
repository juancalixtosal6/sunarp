export function print(html: string){
  let  popupWin;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`${html}`
  );
  popupWin.document.close();
}

export const requestFromBackend = async (url, setcb, loadingFuction, setErrorText) =>{
    loadingFuction(true);
    const fetchFromAPI = () =>{
        return new Promise((res,rej)=>{
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                if(data.error){
                    setcb([]);
                    rej('fail');
                    setErrorText(data.error + ", retrying...");
                }else if(data){
                    const dataJson = JSON.parse(data);
                    const dataList = Array.isArray(dataJson) ? dataJson : [dataJson]
                    setcb(dataList);
                    res('success');
                }
            })
            .catch((e)=>{
                setErrorText('disconnected from backend..., retrying...');
                rej('fail');
            })
        }).catch(()=>{});
    }
    let count = 1;
    while(true){
        const result = await fetchFromAPI();
        if(result === 'success' ){
            setErrorText('');
            break;
        }
        if( count > 2 ){
            setErrorText(`Have tried ${count} times, still cannot connect`);
            break;
        }
        count++;
    }
    loadingFuction(false);
}
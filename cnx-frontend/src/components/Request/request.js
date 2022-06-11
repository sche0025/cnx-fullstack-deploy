// api call to backend, when failed, retry at most 3 times
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
                    // as I noticed that, the first time I called vehicles api
                    // a single object got returned, but later, it started to return
                    // a list which is expected, to handle both cases, so have the following
                    // logic: when returing an object, make it into an array.
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
        // retry api unless
        // 1. already succeed 
        if(result === 'success' ){
            setErrorText('');
            break;
        }
        // 1. already tried 3 times 
        if( count > 2 ){
            setErrorText(`Have tried ${count} times, still cannot connect`);
            break;
        }
        count++;
    }
    // disable loading when request is done
    loadingFuction(false);
}
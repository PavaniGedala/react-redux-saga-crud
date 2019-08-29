import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';
function* postdata(action)
{
    const result =   yield fetch('http://localhost:4000/postData',{method:'POST',
               body:JSON.stringify(action.payload),
               headers:{'Content-Type': 'application/json'}})
               .then(response => response.json())
               console.log(result);
               action.payload.id = result.data;
    //yield put({type: 'ADD_POST',payload:action.payload});
    yield put({type:'GET_STARTED'});           
}

function* getPosts()
{
   const result = yield fetch('http://localhost:4000/getData')
                             .then(response => response.json())
    console.log(result);                         
   yield put({type:'GET_SUCCESS',payload: result.data})                          
}

function* deletePost(action)
{
    const result = yield fetch('http://localhost:4000/deleteUser/'+action.payload.id)
                              .then(response => response.json())
    console.log(result);
    yield put({type:'GET_STARTED'});                   
}

function* getWatcher()
{
    yield takeEvery('GET_STARTED',getPosts)
}

function *postWatcher()
{
    yield takeLatest('ADD',postdata)
}

function* deleteWatcher()
{
    yield takeLatest('DELETE_POST',deletePost)
}

export default function* rootSaga() {
    yield all([
        postWatcher(),
        getWatcher(),
        deleteWatcher()
    ]);
 }
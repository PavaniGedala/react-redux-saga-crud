import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';
const url = 'http://localhost:4000';
function* postdata(action)
{
    const response =   yield fetch(`${url}/postData`,{method:'POST',
               body:JSON.stringify(action.payload),
               headers:{'Content-Type': 'application/json'}})
    const result = yield response.json();           
               console.log(result);
               action.payload.id = result.data;
    yield put({type: 'ADD_POST_SUCCESS'});
    yield put({type:'GET_STARTED'});           
}
function* putdata(action)
{
    const response =   yield fetch(`${url}/putData/${action.payload.id}`,{method:'PUT',
               body:JSON.stringify(action.payload),
               headers:{'Content-Type': 'application/json'}})
    const result = yield response.json();           
    console.log(result);
    yield put({type: 'UPDATE_POST_SUCCESS'});
    //yield put({type:'GET_STARTED'});           
}
function* getPosts()
{
   const response = yield fetch(`${url}/getData`);
   const result = yield response.json();
    console.log(result);                         
   yield put({type:'GET_SUCCESS',payload: result.data})                          
}

function* deletePost(action)
{
    const response = yield fetch(`${url}/deleteUser/${action.payload.id}`)
    const result = yield response.json();
    console.log(result);
    yield put({type:'GET_STARTED'});                   
}

function* editPost(action){
    const response = yield fetch(`${url}/user/${action.payload.id}`);
    const result = yield response.json();
    console.log(result);
    //yield put({type:'GET_STARTED'});  
    yield put({type:'EDIT_POST_SUCCESS',payload: result.data});
}

function* updatePostWatcher(action)
{
    yield takeLatest('UPDATE_POST',putdata);
}

function* editPostWatcher()
{
    yield takeLatest('EDIT_POST',editPost);
}

function* getWatcher()
{
    yield takeEvery('GET_STARTED',getPosts)
}

function *postWatcher()
{
    yield takeLatest('ADD_POST',postdata)
}

function* deleteWatcher()
{
    yield takeLatest('DELETE_POST',deletePost)
}

export default function* rootSaga() {
    yield all([
        postWatcher(),
        getWatcher(),
        deleteWatcher(),
        editPostWatcher(),
        updatePostWatcher()
    ]);
 }
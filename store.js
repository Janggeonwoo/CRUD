import { observable } from 'mobx';

const storee = observable({
    id : "",
    pw : "",
    dataList : undefined,
    
    // action
    idAction(id) {
        id = this.id
    },
    pwAction(pw) {
        pw = this.pw
    },
    dataAction(dataList) {
        dataList = this.dataList
    },

});

export default storee;
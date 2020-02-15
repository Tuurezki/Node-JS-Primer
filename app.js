function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
    /*
    summarize() {
        const summary = 'order id: ' +
            this.id +
            ', message: ' +
            this.message +
            ', delivered: ' +
            this.delivered;
        return summary; 
    } */

    deliver = async () =>{
        console.log('Start Delivery');
        await sleep(2000);
        this.delivered = true;
        console.log('Delivery ready');
    }

    summarize = async () => {
        console.log('Start summarize');
        await sleep(2000);
        const summary = 'order id: ' +
            this.id +
            ', message: ' +
            this.message +
            ', delivered: ' +
            this.delivered;
        console.log('summarize ready');
        return summary;
    }

}

/*
function summarize_order(id, message, delivered){
    const summary = 'order id: ' +
    id +
    ', message: ' +
    message +
    ', delivered: ' +
    delivered;
    return summary
}
*/



let order_obj = new order(1234, 'second order');



console.log('vaihe 1');

order_obj.deliver()
    .then(() => {
        return order_obj.summarize();
})
.then((a) => {
    console.log(a);
});


// const order_summary = order_obj.summarize()
//     .then((summary) => {
//         console.log(summary);
// });

// console.log('vaihe 2')


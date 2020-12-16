var id;
const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey);

const msg = {
  to: 'arnavgupta@gmail.com',
  from: 'shiknema@gmail.com',
  subject: 'Order Summray',
 
};

$(document).ready(()=>{
    $('.email').on('click',(e) => {
        id = e.target.id;
        $.ajax({
            type: 'GET',
            url: '/orders/' + id,            
            success: (data)=>{
                var order = {...data, status:''};
                var orderDate = new Date(data.date);
                var dateDiff = ((Date.now() - orderDate.getTime()) / (1000 * 3600 * 24));
                if (dateDiff < 1) {
                    order.status = "In Progress"
                } else if (dateDiff < 2 ) {
                    order.status = "Dispatched"
                } else if (dateDiff >= 2) {
                    order.status = "Delivered"
                }
                $.ajax({
                    type: 'POST',
                    url: '/sendOrderEmail',                    
                    data: {order},
                    success: (data)=>{
                        if (data.errorMsg) {
                            $('#errorMessage').css('display','block');
                        } else {
                            $('#errorMessage').css('display','none');
                            $('#errorMessage').text(data.errorMsg);
                        }
                        if (data.successMsg) {
                            $('#successMessage').css('display','block');
                            $('#successMessage').text(data.successMsg);
                        } else {
                            $('#successMessage').css('display','none');
                        }
                        
                        
                    },
                    error: ()=>{
                        console.log("Error: Can not send email");
                    }
                })
            },
            error: ()=>{
                alert('No data');
            }
        });
    });
});
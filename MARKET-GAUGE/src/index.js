import africastalking from 'africastalking';

const client = africastalking({
    apiKey: 'c1f548d6541527b9272ae87c1b8a9d670514b8ecedcea094325f2d0181410832',
    username: 'Abel-Ronoh'
  });

  client.SMS.send({
    to: '+254742515910',
    message: 'Short stock, trade now',
    from: 'MARKET-GAUGE',
    

  }).then(()=> console.log("message sent successfuly"))
  .catch( err => console.log(err));

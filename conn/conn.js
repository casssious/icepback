const mysql = require('mysql');
const express = require('express');


const mysqlConn =mysql.createConnection({

  host:'buq2p4mksm9tfurz4nxo-mysql.services.clever-cloud.com',
  user:'uyvssygqtyvw9qhs',
  password:'bKV7iMui6dKk2fCToeiH',
  database:'buq2p4mksm9tfurz4nxo',
  multipleStatements: true

})


mysqlConn.connect((err)  =>{

  if(!err){
    console.log('db connection succeed');

  }else{
    console.log('db connection failed');
    console.log(err);
  }
});

module.exports =mysqlConn;
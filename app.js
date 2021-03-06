var fs = require('fs');
var http = require('http');
var url = require('url');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chefe = require('./src/route/chefe.route');
const cliente = require('./src/route/cliente.route');
const designer = require('./src/route/designer.route');
const programador = require('./src/route/programador.route');
const usuario = require('./src/route/usuario.route');
const app = express();


  
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/src/route/chefe', chefe);
app.use('/src/route/cliente', cliente);
app.use('/src/route/designer', designer);
app.use('/src/route/programador', programador);
app.use('/src/route/usuario', usuario);



app.get('/site/css/css.css', (_req, res) =>{
  console.log('teste')
  fs.readFile('./site/css/css.css', function(err, data){
    if (err){
      res.writeHead(404,{'Content-type': 'text/css'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-type': 'text/css'});
    res.write(data);
    return res.end()
  } )
})

app.get('/conclusão.html', (req,res)=>{
  console.log('teste')
  fs.readFile('./site/conclusão.html',function(err,data){
    if(err){
      res.writeHead("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
})

app.get ('/site/css/css.css', (_req, res) =>{
  console.log('teste')
  fs.readFile('./site/css/css.css', function (err, data){
    if (err){

      res.writeHead(404, {'Content-Type': 'text/css'}); 
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/css'}); 
    res.write(data);  
    return res.end()
  })})




app.get('/falhou.html', (req,res)=>{
  console.log('teste')
  fs.readFile('./site/falhou.html',function(err,data){
    if(err){
      res.writeHead("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
})



app.get('/loguin.html', (req,res)=>{
  console.log('teste')
  fs.readFile('./site/loguin.html',function(err,data){
    if(err){
      res.writeHead("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
})



app.get('/menu.html', (req,res)=>{
  console.log('teste')
  fs.readFile('./site/menu.html',function(err,data){
    if(err){
      res.writeHead("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  })
})




      
    app.get('/pagina1.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pagina1.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


      
    app.get('/pagina2.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pagina2.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })

      
      
    app.get('/pagina3.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pagina3.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


      
    app.get('/pagina4.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pagina4.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })



    app.get('/pergunta4.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta4.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


    app.get('/pergunta5.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta5.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })



    app.get('/pergunta6.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta6.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })

    

    app.get('/pergunta7.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta7.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


    
    app.get('/pergunta8.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta8.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })



    
    app.get('/pergunta9.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta9.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


    
    app.get('/pergunta10.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta10.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })



    
    app.get('/pergunta11.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/pergunta11.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })


    
    app.get('/conclusao.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/conclusao.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })

    app.get('/creditos.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/creditos.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })

    
    app.get('/sociais.html', (req,res)=>{
      console.log('teste')
      fs.readFile('./site/sociais.html',function(err,data){
        if(err){
          res.writeHead("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
      })
    })
    
    





  app.get('/', (req,res)=>{
    console.log('teste')
    fs.readFile('./site/menu.html',function(err,data){
      if(err){
        res.writeHead("404 Not Found");
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    })
  })




app.listen(5000,()=>{
  console.log("Servidor executando na porta 5000")
});



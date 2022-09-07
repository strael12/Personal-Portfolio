var express = require("express");
const { default: mongoose } = require("mongoose");
var app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
const port = process.env.port || 3000;
const Client = require("../../Model/Schema/Client");

// dados connection to schema
const user = "";
const password = "";


// forma de ler os json // midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static tiles
app.use(express.static("assets"));
app.use("/css", express.static(__dirname + "/assets/css"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/img", express.static(__dirname + "/assets/img"));
app.use("/icons", express.static(__dirname + "/assets/icons"));

// conectando ao banco de dados
mongoose.connect(
  `mongodb+srv://${user}:${password}@sandbox.2pgny.mongodb.net/Andle-database-?retryWrites=true&w=majority`,
  () => {
    console.log("Connected");
  }
);

// Salva no Banco de Dados
app.get("/create", async (req, res, next) => {
  res.render("index");
});

app.post("/create", async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const textarea = req.body.textarea;

  if (name !== "" && email !== "" && subject !== "" && textarea !== "") {
    await Client.create({
      name: name,
      email: email,
      subject: subject,
      textarea: textarea,
    });
    res.redirect("/read");
  } else {
    res.render("error");
  }
});

// // Ler e lista todos os clientes

app.get("/read", async (req, res, next) => {
  const all = await Client.find();
  res.render("list", { users: all });
});


// recupera os valores no campo do input

app.get("/update/:id", async (req, res, next) => {
  const clientUser = await Client.findOne({ _id: req.params.id });
  res.render("edit", { users: clientUser });
});   
  
// Atualiza no banco de dados assim que um post é feito

app.post("/update", async(req,res,next)=>{
  const clientUserId = req.body.id;
  if(clientUserId){
    await Client.updateOne({_id:clientUserId},{
      name:req.body.name,
      email:req.body.email,
      subject:req.body.subject,
      textarea:req.body.textarea
    });
    res.redirect("/read");
  } else {
    res.status(404).render("error");
  }
})



// Deleta no banco de dados
app.get('/delete/:id', async (req,res,next) => {
  const id = req.params.id;   
  if(id){
      await Client.deleteOne({_id: id});
      res.redirect('/read');
  }
})


app.listen(port, () => {
  //porta que o servidor vai ouvir
  console.log(`Server running on port ${port}`);
});

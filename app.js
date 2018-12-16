const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const graphqlSchema = require('./schema/schema');

const app = express();

mongoose.connect(`mongodb://root:Admin123@ds135724.mlab.com:35724/graphql`)
mongoose.connection.once( 'open', () => {
  console.log("Database connected");
})

app.use(cors())

app.use("/graphql", graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}))


app.listen(4000, () => {
  console.log("Server started at :" + 4000)
})
package database

import (
	"context"
	"fmt"
	"time"
	"os"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

	var (
		
		database = "mongo-go"
	)


func GetCollection (collection string) *mongo.Collection{
	URIM:="mongodb+srv://adriancitogarcia:Ferchog123@cluster0.mhbnhxt.mongodb.net/test"
	URIMongo:=os.Getenv("URI-mongodb")
	fmt.Println("desde env",URIMongo)
	if URIMongo == ""{
        URIMongo = "mongodb://localhost:27017"
    }
	URI := fmt.Sprintf(URIM)
	fmt.Println(URI)
	client, err := mongo.NewClient(options.Client().ApplyURI(URI))

	if err!= nil{
		panic(err.Error())
	}
	ctx, _ := context.WithTimeout(context.Background(), 10* time.Second)

	err = client.Connect(ctx)

	if err!= nil{
		panic(err.Error())
	}

	return client.Database(database).Collection(collection)

}
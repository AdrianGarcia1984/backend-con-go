package database

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

	var (
		
		database = "mongo-go"
	)


func GetCollection (collection string) *mongo.Collection{
	
	URI := fmt.Sprintf("mongodb://localhost:%d", 27017)

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
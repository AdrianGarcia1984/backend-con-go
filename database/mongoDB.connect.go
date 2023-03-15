package database

import (
	"context"
	"fmt"
	"time"
	"os"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	//"github.com/joho/godotenv"
)

	var (
		
		database = "mongo-go"
	)

func GetCollection (collection string) *mongo.Collection{

	// errEnv:= godotenv.Load(".env")

	// if errEnv!= nil {
    //     fmt.Println(errEnv)
	// 	os.Exit(1)
    // }

	// envMap, envErr:= godotenv.Read(".env")

	// if envErr!= nil {
    //     fmt.Println(envErr)
	// 	os.Exit(1)
    // }

	//  URI:=envMap["URI_MONGODB"]
	 URI:=os.Getenv("URI_MONGODB")
	 
	 fmt.Println("uri: ",os.Getenv("URI_MONGODB"))
	
	if URI == ""{
        URI = "mongodb://localhost:27017"
    }

	client, err := mongo.NewClient(options.Client().ApplyURI(URI))

	if err!= nil{
		panic(err.Error())
	}
	ctx, _ := context.WithTimeout(context.Background(), 10* time.Second)

	err = client.Connect(ctx)

	if err!= nil{
		panic(err.Error())
	}
	fmt.Println("base de datos conectada en: "+URI)
	return client.Database(database).Collection(collection)

}
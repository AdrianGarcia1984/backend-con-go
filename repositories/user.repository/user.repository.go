package user_repository

import (
	"context"
	"fmt"
	"time"

	"github.com/AdrianGarcia1984/backend-con-go/database"
	m "github.com/AdrianGarcia1984/backend-con-go/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var collection = database.GetCollection("users")
var ctx = context.Background()

func Create(user m.User)  ( error){

	 data,err := collection.InsertOne(ctx, user)

	 fmt.Println(data.InsertedID)

	if err != nil {
		return err
	}

	return  nil
}

func Read() (m.Users, error){

	var users m.Users
	filter:= bson.D{}

	cursor, err:= collection.Find(ctx, filter)

	if err != nil {
		return nil, err
	}
	for cursor.Next(ctx){		
		var user m.User
		//el simnbolo & es un  puntero
		err = cursor.Decode(&user)
		
		if err != nil {
			return nil,err
		}
		users= append(users, &user)
	}

	return users, nil
}

func Update(user m.User, userId string) error{

	var err error

	oid, _ := primitive.ObjectIDFromHex(userId)

	filter := bson.M{"_id": oid}
	fmt.Println("filter",filter)
	update:= bson.M{
		"$set": bson.M{
			"name": user.Name,
			"email": user.Email,
			"update_at": time.Now(),
		},
	}
	//fmt.Println(ctx, filter, update)
	_ , err = collection.UpdateOne(ctx, filter, update)
	//fmt.Println("response: ",res)

	if err != nil{
		return err
	}
	return nil
}

func Delete(userId string) ( error){
	
	var err error
	var oid primitive.ObjectID
	//fmt.Println(userId)
	oid, err = primitive.ObjectIDFromHex(userId)

	if err != nil{
		return  err
	}

	filter := bson.M{"_id":oid}

	_, err= collection.DeleteOne(ctx, filter)

	if err != nil{
		return err
	}

	return nil
}
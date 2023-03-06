package main

import (
	//"context"
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	//"go.mongodb.org/mongo-driver/bson"
	//"go.mongodb.org/mongo-driver/mongo"
	//"go.mongodb.org/mongo-driver/mongo/options"

	//"github.com/AdrianGarcia1984/backend-con-go/database"
	m "github.com/AdrianGarcia1984/backend-con-go/models"
	user_service "github.com/AdrianGarcia1984/backend-con-go/services/user.services"
)

func main() {

	port := os.Getenv("PORT")
	

	if port == "" {
		port = "3000"
	}

	app := fiber.New()
	//client, err:= mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017/mongo-go"))
	//coll:=client.Database("mongo-go").Collection("users")

	app.Static("/", "./client_vite/dist")
	//app.Static("/", "./public")

	app.Use(cors.New())

	app.Get("/users", func(c *fiber.Ctx) error {

		users, err := user_service.Read()

		if err != nil {
			panic(err)
		}

		return c.JSON(&fiber.Map{
			"ok":   true,
			"users": users,
		})
	})

	app.Post("/users", func(c *fiber.Ctx) error {

		var user m.User

		user = m.User{
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		}
		c.BodyParser(&user)

		fmt.Println(user)
		err := user_service.Create(user)

		if err != nil {
			panic(err)
		}

		return c.JSON(&fiber.Map{
			"data": "guardando usuario",
			"ok":   true,
		})
	})

	app.Delete("/users/:id", func(c *fiber.Ctx) error {

		_id := c.Params("id")
		err := user_service.Delete(_id)
		fmt.Println(err)
		return c.JSON(&fiber.Map{
			"ok":   true,
			"data": "usuario eliminado",
		})
	})

	app.Put("/users/:id", func(c *fiber.Ctx) error {

		_id := c.Params("id")
		var user m.User

		user = m.User{
			UpdatedAt: time.Now(),
		}
		c.BodyParser(&user)

		fmt.Println(_id, user)

		err := user_service.Update(user, _id)
		fmt.Println(err)
		return c.JSON(&fiber.Map{
			"ok":   true,
			"data": "usuario actualizado",
		})
	})

	app.Listen(":3000")
	fmt.Println("escuchando desde el puerto 3000")

}

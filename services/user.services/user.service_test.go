package user_services_test

import (
	"fmt"
	"testing"
	"time"

	m 			 "github.com/AdrianGarcia1984/backend-con-go/models"
	user_service "github.com/AdrianGarcia1984/backend-con-go/services/user.services"
	"go.mongodb.org/mongo-driver/bson/primitive"
)


var userId string

func TestCreate(t *testing.T) {

	oid:= primitive.NewObjectID()

	userId = oid.Hex()

	user:= m.User{
		ID: oid,
		Name: "adrian",
		Email: "adrian@gmail.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	err:=user_service.Create(user)

	if err!= nil{
		t.Error("test de creado fallido")
		t.Fail()
	}else{
		t.Log("test de creado exitoso")
	}

}

func TestRead(t *testing.T) {
	users, err:= user_service.Read()

	if err != nil{
		t.Error("error en consulta de datos")
		t.Fail()
	}

	if len(users)== 0{
		t.Error("la consulta fallo, no trajo datos")
		t.Fail()
	}else{
		t.Log("la prueba de consulta salio exitosa")
	}
}

func TestUpdate(t *testing.T) {

	user:= m.User{
		Name: "adrian garcia",
		Email: "adriangarcia@gmail.com",
	}

	err := user_service.Update(user, "64000cb0c77b57b3390c3d3f")

	if err != nil{
		t.Error("error al actualizar usuario")
		t.Fail()
	}else{
		t.Log("la prueba de actualizacion salio con exito")
	}

}

func TestDelete(t *testing.T) {

	fmt.Println("id: ",userId)
	err := user_service.Delete("63f50e5c9181d6b8a369690c")

	if err != nil{
		t.Error("error al eliminar usuario")
		t.Fail()
	}else{
		t.Log("la prueba de eliminar salio con exito")
	}


}
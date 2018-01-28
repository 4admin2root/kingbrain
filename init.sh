docker exec brain curl http://localhost:8079/admin/init
docker exec brain curl -XPOST -H "Content-type: application/json" -d '{"openid":1,"name":"爱因斯坦"}' http://localhost:8079/user

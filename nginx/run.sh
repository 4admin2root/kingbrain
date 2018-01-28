docker build -t 4admin2root/kingbrain_web:v1.0 .
docker run -d -p 8080:80 -e TZ="Asia/Shanghai" 4admin2root/kingbrain_web:v1.0

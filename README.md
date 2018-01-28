# kingbrain
kingbrain for you

## run
```
mkdir kingbrain && cd kingbrain
wget https://raw.githubusercontent.com/4admin2root/kingbrain/master/docker-compose.yml
sudo pip install docker-compose
docker-compose up -d
```
## init
```
echo "127.0.0.1    king.joeybox.top" |sudo tee -a  /etc/hosts
curl https://raw.githubusercontent.com/4admin2root/kingbrain/master/init.sh |bash
```

## browser
http://king.joeybox.top:8080/index.html

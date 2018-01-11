#docker volume create --name nexus-data
docker run -d -p 8081:8081 --name nexus -v /Users/zjlv/kingbrain/nexus:/nexus-data sonatype/nexus3:3.6.0

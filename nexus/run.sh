#docker volume create --name nexus-data
docker run -d -p 8081:8081 --name nexus -v /Users/zjlv/github/kingbrain/nexus/data:/nexus-data sonatype/nexus3:3.6.0

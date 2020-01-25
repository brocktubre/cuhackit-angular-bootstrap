FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install curl gcc g++ make git -y
EXPOSE 4200

# Remove before demo
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
RUN npm install -g @angular/cli
# ng serve --host 0.0.0.0

WORKDIR /home/my-app

# docker image build -t cuhackit-angular-bootstrap-image .
# docker run -p 4200:4200 -v /Users/brocktubre/Desktop/Projects/cuhackit-angular-bootstrap:/home/ -it cuhackit-angular-bootstrap-image

#!/bin/bash

yum install ntp -y
service ntpd start

# install tools necessary to build Ambari

# install git
yum install git -y

#install build tool
yum install rpm-build gcc gcc-c++ make rpm-build redhat-rpm-config  -y
mkdir -p ~/rpmbuild/BUILD
mkdir -p ~/rpmbuild/RPMS
mkdir -p ~/rpmbuild/SOURCES
mkdir -p ~/rpmbuild/SPECS
mkdir -p ~/rpmbuild/SRPMS
echo '%_topdir %(echo $HOME)/rpmbuild' > ~/.rpmmacros

#install nodejs
wget http://nodejs.org/dist/v0.10.31/node-v0.10.31-linux-x64.tar.gz
tar zxvf node-v0.10.31-linux-x64.tar.gz
mv node-v0.10.31-linux-x64 /usr/share/node

# install brunch
/usr/share/node/bin/npm install -g brunch

# setup python tool
wget --no-check-certificate http://pypi.python.org/packages/2.6/s/setuptools/setuptools-0.6c11-py2.6.egg
sh setuptools-0.6c11-py2.6.egg

# install maven
wget http://www.us.apache.org/dist/maven/maven-3/3.0.5/binaries/apache-maven-3.0.5-bin.tar.gz
tar zxvf apache-maven-3.0.5-bin.tar.gz
mv apache-maven-3.0.5 /usr/share/maven

# make maven and node available in PATH
echo 'export NODE_HOME=/usr/share/node' >> /etc/profile
echo 'export PATH=$PATH:$NODE_HOME/bin' >> /etc/profile

echo 'export MAVEN_HOME=/usr/share/maven' >> /etc/profile
echo 'export PATH=$PATH:$MAVEN_HOME/bin' >> /etc/profile

echo 'Ambari Development VM has been set up! Enjoy!'

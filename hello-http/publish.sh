VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: ./publish.sh <version>"
  exit 1
fi

echo "Building hello-http:$VERSION"

docker build . --tag registry.orb.local/hello-http:$VERSION --push
#docker push registry.orb.local/hello-http:$VERSION

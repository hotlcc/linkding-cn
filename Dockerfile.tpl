FROM ${FROM_IMAGE_TAG}

WORKDIR /etc/linkding

COPY resources/${VERSION}/templates/ bookmarks/templates/

CMD ["./bootstrap.sh"]

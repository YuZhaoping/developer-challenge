FROM node:alpine3.12


ENV APP_HOME="/opt/kaleido/app"

RUN set -x \
    && addgroup -g 1010 -S kaleido \
    && adduser -S -D -H -u 1010 -h $APP_HOME -s /sbin/nologin -G kaleido -g kaleido kaleido \
    && mkdir -p $APP_HOME \
    && chown -R kaleido:kaleido $APP_HOME

USER kaleido


WORKDIR $APP_HOME


COPY --chown=kaleido:kaleido package.json $APP_HOME/

RUN npm install


COPY --chown=kaleido:kaleido .babelrc $APP_HOME/
COPY --chown=kaleido:kaleido public $APP_HOME/public/
COPY --chown=kaleido:kaleido src $APP_HOME/src/


COPY --chown=kaleido:kaleido docker-entrypoint.sh $APP_HOME/
ENTRYPOINT ["./docker-entrypoint.sh"]


EXPOSE 4000
CMD ["start-app"]

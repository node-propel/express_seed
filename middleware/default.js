
exports.load = function(app, path, logger, cookieParser, bodyParser) {
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  //app.use(express.static(path.join(__dirname, 'public')));
};

CREATE TABLE reviews (
      productId int,
      reviewId int,
      username text,
      stars int,
      title text,
      text text,
      timestamp text,
      numHelpful int,
      verifiedPurchase boolean,
      imageUrl text,
    PRIMARY KEY (productId, reviewId)
) WITH CLUSTERING ORDER BY (reviewId ASC);

java -jar cassandra-loader -host 127.0.0.1 -f data1.csv -schema "reviews.reviews(productid,reviewid, username, stars, title, text, timestamp, numhelpful, verifiedpurchase, imageurl)"

CREATE TABLE reviews2 (
      productId int,
      reviewId int,
      username text,
      stars int,
      title text,
      text text,
      timestamp text,
      numHelpful int,
      verifiedPurchase boolean,
      imageUrl text,
    PRIMARY KEY (reviewId)
) WITH CLUSTERING ORDER BY (reviewId ASC);
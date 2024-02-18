CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/well-being.jpeg', 'Physical Fitness & Wellbeing', 'Photo of heart and weight dumbell icons.'),
('images/dogs_are_life.jpeg', 'Dogs', 'A collage of animated dogs.'),
('images/family.jpeg', 'Family/Support System', 'Photo of an illustrated family.')
('images/self-presence.jpeg', 'Mindfulness & Purpose', 'Illustration of woman meditating in body of water.');

SELECT * FROM "gallery"
ORDER BY "title" ASC;
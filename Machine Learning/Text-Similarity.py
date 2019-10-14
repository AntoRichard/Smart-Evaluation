# -*- coding: utf-8 -*-

import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

def cleaning(text):
    text = re.sub('[^a-zA-z]',' ', text)
    text = text.lower()
    text = text.split()
    ps = PorterStemmer()
    text = [ps.stem(word) for word in text if not word in set(stopwords.words('english'))]
    return ' '.join(text)
    
text2 = 'Hai i am anto'
text = 'Hai this is anto here ...!!!'

import re
text = cleaning(text)

from sklearn.feature_extraction.text import CountVectorizer
cv =  CountVectorizer()
X = cv.fit_transform([text]).toarray()

from sklearn.cluster import KMeans
wcss = []

for i in range(1,2):
    kmeans = KMeans(n_clusters=i,init='k-means++',max_iter=300,n_init=10,random_state=0)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)
    
plt.plot(range(1,2),wcss,color='red')
plt.show()

kmeans = KMeans(n_clusters=2,init='k-means++',max_iter=300,n_init=10,random_state=0)
y_predict = kmeans.fit_predict(X)
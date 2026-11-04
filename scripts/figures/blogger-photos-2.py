# Batch 2 of Carlos's own photos (other albums of his Blogger Takeout).
# Usage: python3 scripts/figures/blogger-photos-2.py <folder with extracted photos>
# Same steps as blogger-photos.py, but APPENDS to data/imagenes/registro.json.
import json,os,sys
from PIL import Image
SRC=sys.argv[1]
E='editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/'
EN='editorial/en/guides/'; ES='editorial/es/guias/'
photos={
 'pied-blue-puppy-plush':('085_WhatsApp-Image-2021-08-20-at-21.16.14-2.jpeg',
   'Blue and white pied French Bulldog puppy resting its head on a brown plush toy',
   'Cachorro de bulldog francés pied, azul y blanco, apoyando la cabeza en un peluche marrón'),
 'blue-puppy-sitting':('036_WhatsApp_Image_2021-09-09_at_18.06.08_(2).jpeg',
   'Blue-grey French Bulldog puppy with a turquoise collar sitting on a brown plush toy',
   'Cachorro de bulldog francés azul grisáceo con collar turquesa, sentado sobre un peluche marrón'),
 'puppy-in-hands':('051_French_Bulldog_Puppy.JPG',
   'Black and white French Bulldog puppy held in a person\'s hands against a dark red background',
   'Cachorro de bulldog francés blanco y negro sostenido en las manos de una persona, con fondo rojo oscuro'),
 'white-puppy-eye-patch':('002_WhatsApp_Image_2021-10-13_at_17.48.20.jpeg',
   'White French Bulldog puppy with a dark patch around one eye, lying on a brown plush toy',
   'Cachorro de bulldog francés blanco con una mancha oscura alrededor de un ojo, echado sobre un peluche marrón'),
 'white-puppy-blue-collar':('102_WhatsApp_Image_2021-10-13_at_17.48.20_(1).jpeg',
   'White French Bulldog puppy with a grey eye patch and a blue collar, resting on a brown plush toy',
   'Cachorro de bulldog francés blanco con una mancha gris en un ojo y collar azul, descansando sobre un peluche marrón'),
 'black-puppy-lying':('070_WhatsApp_Image_2021-08-30_at_22.03.20_(3).jpeg',
   'Black French Bulldog puppy lying on a brown plush toy and looking at the camera',
   'Cachorro de bulldog francés negro echado sobre un peluche marrón, mirando a la cámara'),
 'black-puppy-blue-collar':('013_WhatsApp_Image_2021-09-09_at_18.05.05_(2).jpeg',
   'Black French Bulldog puppy with a white chest and a blue collar sitting on a large brown teddy bear',
   'Cachorro de bulldog francés negro con pecho blanco y collar azul, sentado sobre un gran oso de peluche marrón'),
 'black-puppy-teddy':('063_WhatsApp_Image_2021-08-30_at_21.51.50.jpeg',
   'Black French Bulldog puppy with a white chest sitting between brown teddy bears',
   'Cachorro de bulldog francés negro con pecho blanco, sentado entre osos de peluche marrones'),
 'white-puppy-black-ears':('111_WhatsApp_Image_2021-09-17_at_19.20.11_(8).jpeg',
   'White French Bulldog puppy with black ears and a black patch over one eye, standing on brown plush',
   'Cachorro de bulldog francés blanco con orejas negras y una mancha negra en un ojo, de pie sobre un peluche marrón'),
 'merle-puppy-pink-collar':('053_WhatsApp_Image_2021-09-01_at_07.14.29.jpeg',
   'White French Bulldog puppy with grey merle patches and a pink collar lying on brown plush',
   'Cachorro de bulldog francés blanco con manchas merle grises y collar rosa, echado sobre un peluche marrón'),
}
pairs=[ # (EN dir, ES dir, photo key)
 (EN+'french-bulldog-shedding',ES+'bulldog-frances-muda-de-pelo','pied-blue-puppy-plush'),
 (E+'blue-french-bulldog-hair-loss',ES+'bulldog-frances-azul-caida-de-pelo','blue-puppy-sitting'),
 (E+'french-bulldog-crying-whining',ES+'bulldog-frances-llora','puppy-in-hands'),
 (E+'french-bulldog-puppy-paperwork',ES+'papeles-cachorro-bulldog-frances','white-puppy-eye-patch'),
 (EN+'how-often-to-bathe-a-french-bulldog',ES+'cada-cuanto-banar-bulldog-frances','white-puppy-blue-collar'),
 (E+'french-bulldog-aggression-behavior',ES+'bulldog-frances-agresivo','black-puppy-lying'),
 (E+'french-bulldog-human-allergies',ES+'bulldog-frances-hipoalergenico','black-puppy-blue-collar'),
 (EN+'french-bulldog-farts',ES+'bulldog-frances-gases','black-puppy-teddy'),
 (E+'french-bulldog-dry-nose',ES+'bulldog-frances-nariz-seca','white-puppy-black-ears'),
 (EN+'how-often-should-a-dog-poop',ES+'cuantas-veces-hace-caca-un-perro','merle-puppy-pink-collar'),
]
uses=[(en,'en',k) for en,es,k in pairs]+[(es,'es',k) for en,es,k in pairs]
size={}
for k,(src,*_) in photos.items():
  im=Image.open(os.path.join(SRC,src)).convert('RGB')
  if im.width>1600: im=im.resize((1600,round(im.height*1600/im.width)),Image.LANCZOS)
  im.save(f'public/images/photos/{k}.webp','WEBP',quality=82,method=6)  # no EXIF written
  size[k]=im.size
cap={'en':'Photo: BulldogFrances.com archive.','es':'Foto: archivo de BulldogFrances.com.'}
reg=json.load(open('data/imagenes/registro.json'))
have={i['image_id'] for i in reg['imagenes']}
for k,(src,alt_en,alt_es) in photos.items():
  if k in have: continue
  reg['imagenes'].append(dict(image_id=k,web_file=f'/images/photos/{k}.webp',master_file='Takeout/Blogger (otros álbumes de Carlos) / '+src,source_type='propia',rights_status='propiedad de Carlos (confirmado 2026-11-03)',alt_en=alt_en,alt_es=alt_es,width=size[k][0],height=size[k][1],articulos=[u[0] for u in uses if u[2]==k],review_status='aprobada por Carlos ("sube las fotos que haya", 2026-11-03)',created_at='2026-11-04'))
json.dump(reg,open('data/imagenes/registro.json','w'),ensure_ascii=False,indent=1)
for d,lang,k in uses:
  src,alt_en,alt_es=photos[k];alt=(alt_en if lang=='en' else alt_es).replace('"','&quot;')
  w,h=size[k];p=d+'/ARTICLE.html';s=open(p).read()
  if f'/images/photos/{k}.webp' in s: continue
  fig=f'\n<figure class="article-figure">\n<img src="/images/photos/{k}.webp" width="{w}" height="{h}" alt="{alt}" fetchpriority="high" decoding="async">\n<figcaption>{cap[lang]}</figcaption>\n</figure>'
  i=s.index('</aside>')+len('</aside>'); s=s[:i]+fig+s[i:]; open(p,'w').write(s)
  m=json.load(open(d+'/meta.json'))
  if not m.get('image'): m['image']=f'/images/photos/{k}.webp'; json.dump(m,open(d+'/meta.json','w'),ensure_ascii=False,indent=2); open(d+'/meta.json','a').write('\n')
  print('ok',d)

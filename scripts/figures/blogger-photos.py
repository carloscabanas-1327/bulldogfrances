# Adds Carlos's own photos (from his Blogger Takeout) to articles.
# Usage: python3 scripts/figures/blogger-photos.py <folder with extracted photos>
# Converts to WebP (max 1600 px wide, metadata stripped), inserts a <figure> after the
# key-takeaways box, sets meta.json "image" when empty, and writes data/imagenes/registro.json.
import json,os,sys
from PIL import Image
SRC=sys.argv[1]
E='editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/'
EN='editorial/en/guides/'; ES='editorial/es/guias/'
photos={
 'merle-puppy':('001_Bulldog-Frances-Choco-Merle-2.jpeg','propia',
   'French Bulldog puppy with a mottled merle coat and a blue collar, lying on a cream satin cloth',
   'Cachorro de bulldog francés con pelaje merle jaspeado y collar azul, echado sobre una tela satinada color crema'),
 'fawn-and-black-puppies':('018_Bulldog-Frances-Dorada-3.jpeg','propia',
   'Two French Bulldog puppies, one fawn and one black brindle, resting side by side on a satin cloth',
   'Dos cachorros de bulldog francés, uno leonado y otro atigrado oscuro, descansando juntos sobre una tela satinada'),
 'puppies-together':('034_Bulldog-Frances-Dorada-5.jpeg','propia',
   'Fawn and black brindle French Bulldog puppies lying close together and looking at the camera',
   'Cachorros de bulldog francés leonado y atigrado oscuro echados muy juntos, mirando a la cámara'),
 'brindle-puppy-sitting':('020_Bulldog-Frances-Negra-1.jpeg','propia',
   'Black brindle French Bulldog puppy sitting upright on a cream satin cloth',
   'Cachorro de bulldog francés atigrado oscuro sentado sobre una tela satinada color crema'),
 'pied-puppy-sweater':('023_P3270351.JPG','propia',
   'White and black pied French Bulldog puppy wearing a knitted orange sweater on a striped blanket',
   'Cachorro de bulldog francés pied, blanco con manchas negras, con un suéter tejido naranja sobre una manta a rayas'),
 'pied-puppy-resting':('024_P3260374.JPG','propia',
   'Pied French Bulldog puppy resting on a striped blanket and a blue cushion',
   'Cachorro de bulldog francés pied descansando sobre una manta a rayas y un cojín azul'),
 'pied-puppy-portrait':('028_DSC_4683.JPG','propia',
   'Close-up of a black and white French Bulldog puppy with upright bat ears, looking at the camera',
   'Primer plano de un cachorro de bulldog francés blanco y negro con orejas de murciélago erguidas, mirando a la cámara'),
 'pied-puppy-cushion':('029_DSC_4682.JPG','propia',
   'Black and white French Bulldog puppy resting its chin on a red polka-dot cushion',
   'Cachorro de bulldog francés blanco y negro apoyando la cabeza en un cojín rojo de lunares'),
 'kids-and-frenchie-ai':('030_chicos-bulldog.webp','generada_con_ia',
   'AI-generated illustration of a fawn French Bulldog sitting on a lawn while three children play nearby',
   'Ilustración generada con IA de un bulldog francés leonado sentado en el césped mientras tres niños juegan cerca'),
 'comic-coche-calor-ai':('003_Nunca_dejes_a_tu_perro_en_el_auto.png','generada_con_ia',None,
   'Historieta generada con IA: un dueño deja a su bulldog francés en el auto "solo cinco minutos", el calor sube, una persona da aviso y lo rescatan. Mensaje final: nunca dejes a tu perro solo en el auto, ni con las ventanas entreabiertas'),
}
uses=[ # (article dir, lang, photo key)
 (E+'merle-french-bulldog-health-risks','en','merle-puppy'),(ES+'bulldog-frances-merle','es','merle-puppy'),
 (EN+'french-bulldog-puppy-care','en','fawn-and-black-puppies'),(ES+'cuidados-cachorro-bulldog-frances','es','fawn-and-black-puppies'),
 (EN+'puppy-socialization','en','puppies-together'),(ES+'socializacion-del-cachorro','es','puppies-together'),
 (E+'french-bulldog-puppy-health-checklist','en','brindle-puppy-sitting'),(ES+'revision-salud-cachorro-bulldog-frances','es','brindle-puppy-sitting'),
 (EN+'pied-french-bulldog','en','pied-puppy-sweater'),(ES+'bulldog-frances-pied','es','pied-puppy-sweater'),
 (EN+'how-much-do-french-bulldogs-sleep','en','pied-puppy-resting'),(ES+'cuantas-horas-duerme-bulldog-frances','es','pied-puppy-resting'),
 (EN+'how-to-train-a-french-bulldog','en','pied-puppy-portrait'),(ES+'como-educar-bulldog-frances','es','pied-puppy-portrait'),
 (EN+'can-french-bulldogs-be-left-alone','en','pied-puppy-cushion'),(ES+'bulldog-frances-solo-en-casa','es','pied-puppy-cushion'),
 (EN+'french-bulldog-temperament','en','kids-and-frenchie-ai'),(ES+'caracter-bulldog-frances','es','kids-and-frenchie-ai'),
 (ES+'bulldog-frances-calor-golpe-de-calor','es','comic-coche-calor-ai'),
]
os.makedirs('public/images/photos',exist_ok=True)
size={}
for k,(src,*_) in photos.items():
  im=Image.open(os.path.join(SRC,src)).convert('RGB')
  if im.width>1600: im=im.resize((1600,round(im.height*1600/im.width)),Image.LANCZOS)
  im.save(f'public/images/photos/{k}.webp','WEBP',quality=82,method=6)  # no EXIF written
  size[k]=im.size
cap={('en','propia'):'Photo: BulldogFrances.com archive.',('es','propia'):'Foto: archivo de BulldogFrances.com.',
     ('en','generada_con_ia'):'AI-generated illustration, not a photograph. BulldogFrances.com archive.',
     ('es','generada_con_ia'):'Ilustración generada con IA, no es una fotografía. Archivo de BulldogFrances.com.'}
reg={'descripcion':'Registro interno de imágenes (directiva IMÁGENES USA v1.0, punto 17 y 19). Fotos del archivo del blog de Carlos, exportadas con Google Takeout el 2026-11-03; Carlos confirmó el 2026-11-03 que usar solo sus fotos propias y las generadas con IA.','imagenes':[]}
for k,(src,tipo,alt_en,alt_es) in photos.items():
  reg['imagenes'].append(dict(image_id=k,web_file=f'/images/photos/{k}.webp',master_file='Takeout/Blogger (blog "Bulldog Francés") / '+src,source_type=tipo,rights_status='propiedad de Carlos (confirmado 2026-11-03)',alt_en=alt_en,alt_es=alt_es,width=size[k][0],height=size[k][1],articulos=[u[0] for u in uses if u[2]==k],review_status='aprobada por Carlos (solo propias + IA)',created_at='2026-11-03'))
os.makedirs('data/imagenes',exist_ok=True)
json.dump(reg,open('data/imagenes/registro.json','w'),ensure_ascii=False,indent=1)
for d,lang,k in uses:
  src,tipo,alt_en,alt_es=photos[k];alt=alt_en if lang=='en' else alt_es
  w,h=size[k];p=d+'/ARTICLE.html';s=open(p).read()
  if f'/images/photos/{k}.webp' in s: continue
  fig=f'\n<figure class="article-figure">\n<img src="/images/photos/{k}.webp" width="{w}" height="{h}" alt="{alt}" fetchpriority="high" decoding="async">\n<figcaption>{cap[(lang,tipo)]}</figcaption>\n</figure>'
  i=s.index('</aside>')+len('</aside>'); s=s[:i]+fig+s[i:]; open(p,'w').write(s)
  m=json.load(open(d+'/meta.json'))
  if not m.get('image'): m['image']=f'/images/photos/{k}.webp'; json.dump(m,open(d+'/meta.json','w'),ensure_ascii=False,indent=2); open(d+'/meta.json','a').write('\n')
  print('ok',d)

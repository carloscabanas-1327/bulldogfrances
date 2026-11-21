# Builds the general share images (fallback og:image) from the AI-made bilingual cover.
# Run from the repo root: python3 scripts/social/make-default-og.py (needs Pillow + Liberation fonts).
from PIL import Image, ImageDraw, ImageFont, ImageFilter
src=Image.open('public/bulldogfrances-portada-bilingue.webp').convert('RGB')
W,H=src.size
def card(lines, sub, out):
    bg=src.resize((1200,int(1200*H/W))).crop((0,0,1200,630))
    bg=bg.filter(ImageFilter.GaussianBlur(28))
    bg=Image.blend(bg,Image.new('RGB',bg.size,(250,246,240)),0.55)
    x0,x1=int(W*0.30),int(W*0.755)
    dog=src.crop((x0,0,x1,H)); dw=int(dog.width*630/H); dog=dog.resize((dw,630),Image.LANCZOS)
    mask=Image.new('L',dog.size,255); d=ImageDraw.Draw(mask)
    f=70
    for i in range(f):
        a=int(255*i/f); d.line([(i,0),(i,630)],fill=a); d.line([(dw-1-i,0),(dw-1-i,630)],fill=a)
    bg.paste(dog,(1200-dw,0),mask)
    dr=ImageDraw.Draw(bg)
    big=ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf',96)
    mid=ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf',34)
    sm=ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',30)
    y=150
    cols=[(17,32,58),(122,74,22)]
    for i,l in enumerate(lines):
        dr.text((60,y),l,font=big,fill=cols[i%2]); y+=100
    y+=18
    for s in sub:
        dr.text((62,y),s,font=mid,fill=(40,52,66)); y+=44
    dr.text((62,540),'BULLDOGFRANCES.COM',font=sm,fill=(32,91,134))
    bg.save(out,quality=86,optimize=True,progressive=True)
card(['French','Bulldog'],['Health, care and breed guides','with cited sources'],'public/images/social/og-default-en.jpg')
card(['Bulldog','Francés'],['Guías de salud, cuidados y raza','con fuentes citadas'],'public/images/social/og-default-es.jpg')
s=src.resize((1200,int(1200*H/W))); top=(s.height-630)//2
s.crop((0,top,1200,top+630)).save('public/og-default.jpg',quality=86,optimize=True,progressive=True)

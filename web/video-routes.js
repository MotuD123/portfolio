export const videoRoutes=[
 {name:'广告',slug:'advertising',description:'品牌表达、产品种草与效果转化。',types:[{name:'TVC',slug:'tvc'},{name:'带货',slug:'commerce'},{name:'信息流',slug:'feed'}]},
 {name:'内容创作',slug:'stories',description:'从角色与叙事出发，让故事落在画面里。',types:[{name:'短剧',slug:'series'},{name:'短片',slug:'shorts'}]},
 {name:'游戏',slug:'games',description:'用选择与互动，走进故事。',types:[{name:'互动影游',slug:'interactive'}]}
];
export const categoryHref=group=>'/video/'+group.slug;
export const typeHref=(group,type)=>categoryHref(group)+'/'+type.slug;
const groupCoverIds={advertising:'BV1zbypzoES6',stories:'BV1R6ypzJEfz',games:'BV1EjyxzYEvn'};
export function categoryCard(group,projects){const items=projects.filter(p=>p.category===group.name),cover=items.find(p=>p.id===groupCoverIds[group.slug])||items[0],a=document.createElement('a');a.className='category-page-card has-category-cover';a.href=categoryHref(group);a.innerHTML='<div class="category-cover"><img src="'+cover.poster+'" alt="'+cover.title+'" width="1600" height="900" loading="lazy"></div><div class="category-card-content"><h3>'+group.name+'</h3><p>'+group.types.map(t=>t.name).join(' / ')+'</p><div class="category-card-bottom"><span>'+items.length+' 个项目</span><span>进入分类</span></div></div>';return a}
const subtypeCovers={"tvc":["tvc","石头扫地机器人"],"commerce":["commerce","带货作品选帧"],"feed":["feed","生存游戏与捕鱼大作战"],"series":["series","剑荡山河"],"shorts":["shorts","再见"],"interactive":["games","重生之我被美女包围了"]};
const typeCoverIds={tvc:'BV16typztEvY',commerce:'BV1pWypzwEkq',feed:'BV1EEyxzwEPK',series:'BV1R6ypzJEfz',shorts:'BV1fEyxzwEAE',interactive:'BV1EjyxzYEvn'};
export function subtypeCard(group,type,items){const matches=items.filter(p=>p.type===type.name),cover=matches.find(p=>p.id===typeCoverIds[type.slug])||matches[0],a=document.createElement('a');a.className='category-page-card has-category-cover subtype-card';a.href=typeHref(group,type);a.innerHTML='<div class="category-cover"><img src="'+cover.poster+'" alt="'+cover.title+'" width="1600" height="900" loading="lazy"></div><div class="category-card-content"><h3>'+type.name+'</h3><p>'+matches.length+' 个项目 · '+matches.reduce((n,p)=>n+p.episodes.length,0)+' 条视频</p><div class="category-card-bottom"><span>原画视频 / 资产 / 剧本</span><span>查看作品</span></div></div>';return a}

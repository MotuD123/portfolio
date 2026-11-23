import {uploadedDesignProjects} from './design-projects.js?v=ui-34';
export const designRoutes=[
{name:'品牌全案',slug:'branding',description:'品牌定位 / 标志系统 / 包装与传播',project:'brand-tayou'},
{name:'电商全案',slug:'commerce',description:'产品主视觉 / 商品展示 / 营销应用',project:'commerce-chanel'},
{name:'IP设计',slug:'ip',description:'角色形象 / 场景海报 / 文创延展',project:'ip-dessert'},
{name:'UI设计',slug:'ui',description:'界面设计 / 图标系统 / 多端体验',project:'ui-ticket'},
{name:'字体设计',slug:'typography',description:'字形探索 / 文字海报 / 应用设计',project:'type-4'},
{name:'专辑封面',slug:'albums',description:'音乐视觉 / 封面设计 / 播放界面',project:'album-3'}
];
export const designHref=group=>'/design/'+group.slug;
export function designCategoryCard(group){const projects=uploadedDesignProjects.filter(p=>p.category===group.name),cover=uploadedDesignProjects.find(p=>p.id===group.project)||projects[0],a=document.createElement('a');a.className='category-page-card has-category-cover design-category-card';a.href=designHref(group);a.innerHTML='<div class="category-cover"><img src="'+cover.poster+'" alt="'+cover.title+'" loading="lazy" width="800" height="533"></div><div class="category-card-content"><span class="category-eyebrow">'+group.slug.toUpperCase()+'</span><h3>'+group.name+'</h3><p>'+group.description+'</p><div class="category-card-bottom"><span>'+projects.length+' 个项目 · '+projects.reduce((n,p)=>n+p.assets.length,0)+' 张设计图</span><span>进入分类</span></div></div>';return a}
export function designProjectCard(project,projects){const button=document.createElement('button');button.className='project-card';button.dataset.format='DESIGN';button.innerHTML='<div class="project-art"><img class="project-cover" src="'+project.poster+'" alt="'+project.title+'" loading="lazy"><span>DESIGN</span><small>'+project.assets.length+' 张设计图</small></div><div class="project-caption"><h3>'+project.title+'</h3><span>'+project.category+'</span></div>';return button}

const furnace=extendContent(Block,"Ore-factory -II",{
	update:function(tile){
		titanium=Vars.content.getByName(ContentType.item,"titanium")
		lead=Vars.content.getByName(ContentType.item,"lead")
		coal=Vars.content.getByName(ContentType.item,"coal")
		if(tile.entity.items.get(titanium)>=1&&tile.entity.items.get(lead)<10){
			tile.entity.items.remove(titanium,1)
			tile.entity.items.add(lead,2)
		}
		if(tile.entity.items.get(coal)>=1&&tile.entity.items.get(lead)<10){
			tile.entity.items.remove(coal,1)
			tile.entity.items.add(lead,1)
		}
		this.tryDump(tile,lead)
	}
})
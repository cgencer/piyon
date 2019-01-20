<?php

/* sites/all/themes/gavias_unix/templates/block/block--system-breadcrumb-block.html.twig */
class __TwigTemplate_175c461de6dd0d3fadc44b27d5d658dcfcc9d5c51eb119bfb6a6234fe0d07407 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 32, "if" => 33, "block" => 53);
        $filters = array("clean_class" => 39);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'block'),
                array('clean_class'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 32
        $context["title_classes"] = "";
        // line 33
        if ((($context["label"] ?? null) == "")) {
            // line 34
            $context["title_classes"] = "no-title";
        }
        // line 37
        $context["classes"] = array(0 => "block gva-block-breadcrumb", 1 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 39
($context["configuration"] ?? null), "provider", array()))), 2 => ("block-" . \Drupal\Component\Utility\Html::getClass(        // line 40
($context["plugin_id"] ?? null))), 3 =>         // line 41
($context["title_classes"] ?? null));
        // line 44
        echo "
<div class=\"breadcrumb-content-inner\">
  <div class=\"gva-breadcrumb-content\">
    <div";
        // line 47
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
      <div class=\"breadcrumb-style\" style=\"";
        // line 48
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["custom_style"] ?? null), "html", null, true));
        echo "\">
        <div class=\"container\">
          <div class=\"breadcrumb-content-main\">
            <h2 class=\"page-title\">";
        // line 51
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["breadcrumb_title"] ?? null), "html", null, true));
        echo " </h2>
            ";
        // line 52
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_prefix"] ?? null), "html", null, true));
        echo " ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_suffix"] ?? null), "html", null, true));
        echo "
            ";
        // line 53
        $this->displayBlock('content', $context, $blocks);
        // line 60
        echo "          </div> 
        </div>   
      </div> 
    </div>  
  </div>  
</div>  

";
    }

    // line 53
    public function block_content($context, array $blocks = array())
    {
        // line 54
        echo "              <div class=\"";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["custom_classes"] ?? null), "html", null, true));
        echo "\">
                <div";
        // line 55
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content_attributes"] ?? null), "addClass", array(0 => "content block-content"), "method"), "html", null, true));
        echo ">
                  ";
        // line 56
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
        echo "
                </div>
              </div>  
            ";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/block/block--system-breadcrumb-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  106 => 56,  102 => 55,  97 => 54,  94 => 53,  83 => 60,  81 => 53,  75 => 52,  71 => 51,  65 => 48,  61 => 47,  56 => 44,  54 => 41,  53 => 40,  52 => 39,  51 => 37,  48 => 34,  46 => 33,  44 => 32,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/block/block--system-breadcrumb-block.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/block/block--system-breadcrumb-block.html.twig");
    }
}
